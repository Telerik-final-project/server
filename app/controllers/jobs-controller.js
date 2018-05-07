/* globals __dirname */
const fs = require('fs');
const path = require('path');
class JobsController {
  constructor(data) {
    this.data = data;
  }

  async getAllJobAds() {
    let ads = [];

    try {
      ads = await this.data.jobOffers.getAll();
    } catch (err) {
      throw err;
    }
    try {
      ads.map((ad) => {
        const relPath = path.join(
          __dirname,
          '..',
          '..',
          'uploads',
          'descriptions',
          ad.descriptionUrl,
        );
        const data = fs.readFileSync(relPath, 'utf8');
        ad.dataValues.description = data;
      });
    } catch (err) {
      throw err;
    }
    return ads;
  }

  async getJobAdById(id) {
    return new Promise(async (resolve, reject) => {
      let ad;

      try {
        ad = await this.data.jobOffers.getById(id);
      } catch (err) {
        throw err;
      }

      const relPath = path.join(
        __dirname,
        '..',
        '..',
        'uploads',
        'descriptions',
        ad.descriptionUrl,
      );

      fs.readFile(relPath, 'utf8', (err, data) => {
        if (err) {
          return reject();
        }

        ad.dataValues.description = data;

        return resolve(ad);
      });
    });
  }

  /**
   * @description Get a row from table by given id.
   * @param id number
   * @param data array form objects with arttribute
   * and value to update
   * @return Returns db object with id = id parameter.
   */

  async updateJobAd(data) {
    console.log(data);
    try {
      await this.data.jobOffers.update(data.id, data);
    } catch (err) {
      throw err;
    }

    const relPath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      'descriptions',
      data.descriptionUrl,
    );

    try {
      fs.writeFile(relPath, data.description, 'utf8', (err) => {
        if (err) throw err;
      });
    } catch (err) {
      throw err;
    }

    return true;
  }

  async createJobAd(data) {
    let newJob;
    const description = data.description;
    const fileName = new Date().getTime() + '.txt';
    const relPath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      'descriptions',
      fileName,
    );

    try {
      fs.writeFile(relPath, description, 'utf8', (err) => {
        if (err) throw err;
      });
      data.descriptionUrl = fileName;
      newJob = await this.data.jobOffers.create(data);
    } catch (err) {
      throw err;
    }

    return newJob;
  }

  async deleteJobAd(id) {
    try {
      await this.data.jobOffers.delete(id);
    } catch (err) {
      throw err;
    }

    return true;
  }
}

module.exports = JobsController;
