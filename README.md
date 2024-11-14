# notino_001 - simple web project with nodejs

## only two files 

 - index.js 

```
node index.js     
Query successful: {
  object: 'list',
  results: [
    {
      object: 'page',
      id: '224d4b9c-fa4b-47bf-8641-e60f760f4426',
      created_time: '2022-06-08T11:08:00.000Z',
      last_edited_time: '2024-11-14T10:28:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      cover: null,
      icon: null,
      parent: [Object],
      archived: false,
      in_trash: false,
      properties: [Object],
      url: 'https://www.notion.so/catafest-224d4b9cfa4b47bf8641e60f760f4426',
      public_url: null
    }
  ],
  next_cursor: null,
  has_more: false,
  type: 'page_or_database',
  page_or_database: {},
  request_id: 'e345f006-a0ef-4a81-a45c-320bd2baa83e'
}

```

 - index_001.js 
```
node index_001.js
{
  object: 'page',
  id: '13e0b53b-0491-81be-9e50-c9cc9bfa65ff',
  created_time: '2024-11-14T12:24:00.000Z',
  last_edited_time: '2024-11-14T12:24:00.000Z',
  created_by: { object: 'user', id: 'b63a150c-ed41-4748-a49a-288c2a466916' },
  last_edited_by: { object: 'user', id: 'b63a150c-ed41-4748-a49a-288c2a466916' },
  cover: {
    type: 'external',
    external: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg'
    }
  },
  icon: { type: 'emoji', emoji: '🥬' },
  parent: {
    type: 'database_id',
    database_id: '3a7a77aa-971a-48e8-8e11-53d44086a96a'
  },
  archived: false,
  in_trash: false,
  properties: {
    'Phone Number': { id: 'DEaC', type: 'rich_text', rich_text: [] },
    'Extra Information': { id: 'i~cg', type: 'rich_text', rich_text: [] },
    Name: { id: 'title', type: 'title', title: [Array] }
  },
  url: 'https://www.notion.so/Tuscan-kale-13e0b53b049181be9e50c9cc9bfa65ff',
  public_url: null,
  request_id: 'e14f1bf7-bc05-44a5-aa08-01a7c86be0d7'
}
```