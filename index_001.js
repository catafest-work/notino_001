import { Client, APIErrorCode } from "@notionhq/client";
import { config } from "dotenv";
config();

// URL-ul paginii pe care vrei să o citești și să o modifici
const url = 'https://www.notion.so/Getting-Started-531293f0d0484658a1df0f8f05afc4ab';

// // Funcție pentru a citi conținutul paginii
// async function readPage(url) {
//     try {
//         // clasa Page din API / SDK notino - diferenta ... intre interfata si ...
//         // Afișarea HTML-ului modificat
//         console.log(doc.documentElement.outerHTML);
//     } catch (error) {
//         console.error('Eroare la citirea paginii:', error);
//     }
// }
//
// // Apelarea funcției pentru a citi și modifica pagina
// readPage(url);

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = "3a7a77aa971a48e88e1153d44086a96a";
// (async () => {
async function readPage(url) {
    const response = await notion.pages.create({
        "cover": {
            "type": "external",
            "external": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
            }
        },
        "icon": {
            "type": "emoji",
            "emoji": "🥬"
        },
        "parent": {
            "type": "database_id",
            "database_id": databaseId
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": "Tuscan kale"
                        }
                    }
                ]
            },
        },
        "children": [
            {
                "object": "block",
                "heading_2": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "paragraph": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                                "link": {
                                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                                }
                            },
                            "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                        }
                    ],
                    "color": "default"
                }
            }
        ]
    });
    console.log(response);
}
readPage(url);