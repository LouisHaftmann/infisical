import SecurityClient from "~/utilities/SecurityClient";

/**
 * This route starts the integration after teh default one if gonna set up.
 * @param {*} integrationId
 * @returns
 */
const startIntegration = ({ integrationId, appName, environment }) => {
  return SecurityClient.fetchCall(
    "/api/v1/integration/" + integrationId,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        update: {
          app: appName,
          environment,
          isActive: true,
        },
      }),
    }
  ).then(async (res) => {
    if (res.status == 200) {
      return res;
    } else {
      console.log("Failed to start an integration");
    }
  });
};

export default startIntegration;
