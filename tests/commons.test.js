/* eslint-disable */
const chai = require('chai');
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const sinonStubPromise = require('sinon-stub-promise');
const { expect } = chai;
sinonStubPromise(sinon);
chai.use(sinonChai);

const {
  createFolder,
  createFile,
  appendContent,
  base,
  logError,
  logSuccess,
  createConfig,
  getConfigFile,
  returnPromise
} = require('./../src/communs/index.js');

describe("Commons.js", () => {
  describe("Call function", () => {
    it("Should call functions", () => {
      const spy = sinon.stub();
      returnPromise(spy, 'path', 'content')
      expect(spy).to.been.have.called;
    });
  });

  describe("Error log", () => {
    // it("Should call console.log", () => {
    //   const spy = sinon.stub(console, 'log');
    //   logError();
    //   expect(spy).to.have.been.calledOnce;
    // })
  })

  describe("Smoke tests", () => {
    it("Base should be redux", () => {
      expect(base).to.equal("redux")
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
