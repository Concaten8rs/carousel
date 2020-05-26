# Target Image Carousel

## Server API
### All API routes
  * GET `/api/products/:id/photos`
  * POST `/api/products/:id/photos`
  * POST `/api/products`
  * PUT `/api/products/:id/photos/:photo_id`
  * PUT `/api/products/:id`
  * DELETE `/api/products/:id/photos/:photo_id`
  * DELETE `/api/products/:id`

### Get all photos for products
  * GET `/api/products/:id/photos`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    [
      {
        "id": "Number",
        "product_id": "Number",
        "photo_description": "String",
        "photo_order": "Number",
        "photo_url": "URL",
        "posting_date": "Date"
      },
      {
        "id": "Number",
        "product_id": "Number",
        "photo_description": "String",
        "photo_order": "Number",
        "photo_url": "URL",
        "posting_date": "Date"
      },
      {
        "id": "Number",
        "product_id": "Number",
        "photo_description": "String",
        "photo_order": "Number",
        "photo_url": "URL",
        "posting_date": "Date"
      }
    ]
```

### Add photo to products
  * POST `/api/products/:id/photos`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "product_id": "Number",
      "photo_description": "String",
      "photo_order": "Number",
      "photo_url": "URL",
      "posting_date": "Date"
    }
```

### Add product to products
  * POST `/api/products`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "product_name": "String",
      "product_description": "String",
      "cost": "Number"
    }
```

### Update photo
  * PUT `/api/products/:id/photos/:photo_id`

**Path Parameters:**
  * `id` product id
  * `photo_id` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "product_id": "Number",
      "photo_description": "String",
      "photo_order": "Number",
      "photo_url": "URL",
      "posting_date": "Date"
    }
```

### Update product
  * PUT `/api/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "product_name": "String",
      "product_description": "String",
      "cost": "Number"
    }
```

### Delete photo
  * DELETE `/api/products/:id/photos/:photo_id`

**Path Parameters:**
  * `id` products id
  * `photo_id` photo id

**Success Status Code:** `204`

### Delete product
  * DELETE `/api/products/:id/`

**Path Parameters:**
  * `id` products id

**Success Status Code:** `204`