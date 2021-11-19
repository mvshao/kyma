const axios = require("axios");
const https = require("https");
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // curl -k
});
axios.defaults.httpsAgent = httpsAgent;
const {
  ensureCommerceMockLocalTestFixture,
  checkFunctionResponse,
  sendEventAndCheckResponse,
  renewCommerceMockCertificate,
  revokeCommerceMockCertificate,
  cleanMockTestFixture,
  checkInClusterEventDelivery,
} = require("./fixtures/commerce-mock");
const {
  printRestartReport,
  getContainerRestartsForAllNamespaces,
} = require("../utils");
const { checkLokiLogs, lokiPortForward } = require("../logging");

<<<<<<< HEAD
function commerceMockTests() {
  describe("CommerceMock tests", function () {
    this.timeout(10 * 60 * 1000);
    this.slow(5000);
    const withCentralAppConnectivity = (process.env.WITH_CENTRAL_APP_CONNECTIVITY === "true");
    const testNamespace = "test";
    const testStartTimestamp = new Date().toISOString();
    let initialRestarts = null;
    let cancelPortForward = null;
=======
describe("CommerceMock tests", function () {
  this.timeout(10 * 60 * 1000);
  this.slow(5000);
  const withCentralAppConnectivity =
    process.env.WITH_CENTRAL_APP_CONNECTIVITY === "true";
  const testNamespace = "test";
  const testStartTimestamp = new Date().toISOString();
  let initialRestarts = null;
  let cancelPortForward = null;
>>>>>>> 1a3bda247 (Added test for OSS)

    before(() => {
      cancelPortForward = lokiPortForward();
    });

    after(() => {
      cancelPortForward();
    });

    it("Listing all pods in cluster", async function () {
      initialRestarts = await getContainerRestartsForAllNamespaces();
    });

<<<<<<< HEAD
    it("CommerceMock test fixture should be ready", async function () {
      await ensureCommerceMockLocalTestFixture("mocks", testNamespace, withCentralAppConnectivity).catch((err) => {
        console.dir(err); // first error is logged
        return ensureCommerceMockLocalTestFixture("mocks", testNamespace, withCentralAppConnectivity);
      });
=======
  it("CommerceMock test fixture should be ready", async function () {
    await ensureCommerceMockLocalTestFixture(
      "mocks",
      testNamespace,
      withCentralAppConnectivity
    ).catch((err) => {
      console.dir(err); // first error is logged
      return ensureCommerceMockLocalTestFixture(
        "mocks",
        testNamespace,
        withCentralAppConnectivity
      );
>>>>>>> 1a3bda247 (Added test for OSS)
    });

    it("in-cluster event should be delivered (structured and binary mode)", async function () {
      await checkInClusterEventDelivery(testNamespace);
    });

    it("function should be reachable through secured API Rule", async function () {
      await checkFunctionResponse(testNamespace);
    });

    it("order.created.v1 event should trigger the lastorder function", async function () {
      await sendEventAndCheckResponse();
    });

<<<<<<< HEAD
    it("Should print report of restarted containers, skipped if no crashes happened", async function () {
      const afterTestRestarts = await getContainerRestartsForAllNamespaces();
      printRestartReport(initialRestarts, afterTestRestarts);
    });

    it("Logs from commerce mock pod should be retrieved through Loki", async function() {
      await checkLokiLogs(testStartTimestamp);
    });
=======
  // renew certificate
  it("CommerceMock should renew it's certificate", async function () {
    await renewCommerceMockCertificate();
  });
  // call lambda and succeed
  it("order.created.v1 event should trigger the lastorder function", async function () {
    await sendEventAndCheckResponse();
  });

  // revoke certificate
  it("should revoke Commerce Mock certificate", async function () {
    await revokeCommerceMockCertificate();
  });

  /* TODO why is this passing, after revoking the cert
  // call lambda and FAIL
  it("order.created.v1 event should trigger the lastorder function", async function () {
    await sendEventAndCheckResponse();
  });*/

  it("Should print report of restarted containers, skipped if no crashes happened", async function () {
    const afterTestRestarts = await getContainerRestartsForAllNamespaces();
    printRestartReport(initialRestarts, afterTestRestarts);
  });

  it("Logs from commerce mock pod should be retrieved through Loki", async function () {
    await checkLokiLogs(testStartTimestamp);
  });
>>>>>>> 1a3bda247 (Added test for OSS)

    it("Test namespaces should be deleted", async function () {
      await cleanMockTestFixture("mocks", testNamespace, true);
    });
  });
}

module.exports = {
  commerceMockTests,
}
