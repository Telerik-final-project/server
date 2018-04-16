const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const JobsController = require('../app/controllers/jobs-controller');

chai.use(chaiAsPromised);
const expect = chai.expect;

let jobsArray = [];

const fakeData = {
    jobOffers: {
        getAll() {
            return jobsArray;
        },
        getById(id) {
            return jobsArray.find((job) => job.id === id) || [];
        },
        update(id, data) {
            const obj = jobsArray.find((job) => job.id === id);
            obj.title = data.title;

            return true;
        },
    },
};

describe('JobsController', () => {
    describe('getAllJobAds()', () => {
        it('expect to return an array of objects', async () => {
            jobsArray = [{
                id: 1,
                title: 'job',
            }];

            const controller = new JobsController(fakeData);

            const result = await controller.getAllJobAds();

            expect(result).to.be.deep.eq(jobsArray);
        });
    });
    describe('getJobAdById()', () => {
        describe('when data is valid', () => {
            it('expect to return an array of objects', async () => {
                jobsArray = [{
                    id: 1,
                    title: 'job',
                }];

                const controller = new JobsController(fakeData);

                const result = await controller.getJobAdById(1);

                expect(result).to.be.deep.eq(jobsArray[0]);
            });
        });
        describe('when data is invalid', () => {
            it('expect to return an empty array', async () => {
                jobsArray = [{
                    id: 1,
                    title: 'job',
                }];

                const controller = new JobsController(fakeData);

                const result = await controller.getJobAdById(2);
                console.log(result);
                return expect(result).to.be.empty;
            });
        });
    });
    describe('updateJobAd()', () => {
        it('expect to return true', async () => {
            jobsArray = [{
                id: 1,
                title: 'job',
            }];
            const newJob = {
                id: 1,
                title: 'new',
            };

            const controller = new JobsController(fakeData);

            const result = await controller.updateJobAd(1, newJob);

            return expect(result).to.be.true;
        });
    });
});
