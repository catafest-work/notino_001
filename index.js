import { Client, APIErrorCode } from "@notionhq/client";
import { config } from "dotenv";
config();
const databaseId = "3a7a77aa971a48e88e1153d44086a96a";
// try {
//     const notion = new Client({ auth: process.env.NOTION_TOKEN })
//     const myPage = await notion.databases.query({
//         database_id: databaseId,
//         filter: {
//             property: "Name",
//             rich_text: {
//                 contains: "catafest",
//             },
//         },
//     })
// } catch (error) {
//     if (error.code === APIErrorCode.ObjectNotFound) {
//         //
//         // For example: handle by asking the user to select a different database
//         //
//     } else {
//         // Other error handling code
//         console.error(error)
//     }
// }

async function queryDatabase() {
    try {
    const notion = new Client({ auth: process.env.NOTION_TOKEN })
        const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Name",
            rich_text: {
                contains: "catafest",
            },
        },
    })
        console.log("Query successful:", response);
    } catch (error) {
        if (error.code === APIErrorCode.ObjectNotFound) {
            console.error("Database not found. Please check the database ID.");
        } else if (error.code === APIErrorCode.Unauthorized) {
            console.error("Unauthorized access. Please check your Notion token.");
        } else if (error.code === APIErrorCode.RateLimited) {
            console.error("Rate limit exceeded. Please try again later.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    }
}

queryDatabase();