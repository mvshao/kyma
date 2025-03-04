# Runtime Agent Architecture

> [!WARNING]
> Runtime Agent is used in the [Compass mode](../../01-overview/application-connectivity/README.md) of Application Connectivity. To learn how to install Compass and integrate with it, refer to the [Compass documentation](https://github.com/kyma-incubator/compass/blob/master/docs/compass/04-01-installation.md) or to the [Director GraphQL schema](https://github.com/kyma-incubator/compass/blob/master/components/director/pkg/graphql/schema.graphql) directly. 

This document presents the workflow of Runtime Agent.

![Runtime Agent architecture](assets/ra-runtime-agent-workflow.svg)

1. Runtime Agent fetches the certificate from the [Connector](https://github.com/kyma-incubator/compass/blob/master/docs/connector/02-01-connector-service.md) to initialize connection with Compass.

2. Runtime Agent stores the certificate and key for the Connector and the Director in the Secret.

3. Runtime Agent synchronizes the Runtime with the Director. It does so by:
 - fetching new Applications from the Director and creating them in the Runtime
 - removing from the Runtime the Applications that no longer exist in the Director.

4. Runtime Agent labels the Runtime data in the Director with the Event Gateway URL and the Console URL of the Kyma cluster. These URLs are displayed in the Compass UI.

5. Runtime Agent renews the certificate for the Connector and the Director to maintain connection with Compass. This only happens if the remaining validity period for the certificate passes a certain threshold.
