import { API, graphqlOperation } from "aws-amplify";
import { createPlusCodeLevel3 } from "../../../src/mutations";

export async function createGraphQLPluscodeLevel3(
  digits,
  plusCodeLevel3MiddleCoordId,
  numberOfLines,
  parentID
) {
  try {
    const response = await API.graphql(
      graphqlOperation(createPlusCodeLevel3, {
        input: {
          digits: digits,
          parentIdWithDigits: parentID + digits,
          plusCodeLevel3MiddleCoordId: plusCodeLevel3MiddleCoordId,
          plusCodeLevel3PluscodeParentId: parentID,
          numberOfLines: numberOfLines,
        },
      })
    );

    console.log(
      "GraphQL pluscodeLevel3 successfully made, id:" +
        JSON.stringify(response.data.createPlusCodeLevel3.id)
    );
    return response.data.createPlusCodeLevel3.id;
  } catch (err) {
    console.log("Error creating pluscodelevel3:", err);
    return "No ID";
  }
}
