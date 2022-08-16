/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'us-central1';
// const modelId = 'YOUR_MODEL_ID';

// Imports the Google Cloud AutoML library
const {AutoMlClient} = require('@google-cloud/automl').v1;

// Instantiates a client
const client = new AutoMlClient();

async function deployModel() {
  // Construct request
  const request = {
    name: client.modelPath(projectId, location, modelId),
  };

  const [operation] = await client.deployModel(request);

  // Wait for operation to complete.
  const [response] = await operation.promise();
  console.log(`Model deployment finished. ${response}`);
}

deployModel();