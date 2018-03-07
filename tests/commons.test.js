/* eslint-disable */
const expect = require('chai').expect;
const {
  createFolder,
  createFile,
  appendContent,
  base,
  logError,
  logSuccess,
  createConfig,
  getConfigFile } = require('./../src/communs/index.js');

describe("Commons.js", () => {
  describe("Smoke tests", () => {
    it("Should return true", () => {
      expect(true).to.be.true;
    });

    it("Function createFolder should exists", () => {
      expect(createFolder).to.exist;
    })

    it("Function createFile should exists", () => {
      expect(createFile).to.exist;
    })

    it("Function appendContent createFile should exists", () => {
      expect(appendContent).to.exist;
    })

    it("Function base should exists", () => {
      expect(base).to.exist;
    })

    it("Function logError should exists", () => {
      expect(logError).to.exist;
    })

    it("Function logSuccess should exists", () => {
      expect(logSuccess).to.exist;
    })

    it("Function createConfig should exists", () => {
      expect(createConfig).to.exist;
    })

    it("Function getConfigFile should exists", () => {
      expect(getConfigFile).to.exist;
    })
  });
});
