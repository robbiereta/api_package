# OpenApiNotastore.NotaApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNota**](NotaApi.md#addNota) | **POST** /nota | Add a new nota to the store
[**deleteNota**](NotaApi.md#deleteNota) | **DELETE** /nota/{notaId} | Deletes a nota
[**findNotasByStatus**](NotaApi.md#findNotasByStatus) | **GET** /nota/findByStatus | Finds Notas by status
[**findNotasByTags**](NotaApi.md#findNotasByTags) | **GET** /nota/findByTags | Finds Notas by tags
[**getNotaById**](NotaApi.md#getNotaById) | **GET** /nota/{notaId} | Find nota by ID
[**updateNota**](NotaApi.md#updateNota) | **PUT** /nota | Update an existing nota
[**updateNotaWithForm**](NotaApi.md#updateNotaWithForm) | **POST** /nota/{notaId} | Updates a nota in the store with form data
[**uploadFile**](NotaApi.md#uploadFile) | **POST** /nota/{notaId}/uploadImage | uploads an image



## addNota

> Nota addNota(nota)

Add a new nota to the store



### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let nota = new OpenApiNotastore.Nota(); // Nota | Nota object that needs to be added to the store
apiInstance.addNota(nota, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nota** | [**Nota**](Nota.md)| Nota object that needs to be added to the store | 

### Return type

[**Nota**](Nota.md)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json


## deleteNota

> deleteNota(notaId, opts)

Deletes a nota



### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let notaId = 789; // Number | Nota id to delete
let opts = {
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deleteNota(notaId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notaId** | **Number**| Nota id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findNotasByStatus

> [Nota] findNotasByStatus(status)

Finds Notas by status

Multiple status values can be provided with comma separated strings

### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let status = ["'available'"]; // [String] | Status values that need to be considered for filter
apiInstance.findNotasByStatus(status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| Status values that need to be considered for filter | 

### Return type

[**[Nota]**](Nota.md)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## findNotasByTags

> [Nota] findNotasByTags(tags)

Finds Notas by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let tags = ["null"]; // [String] | Tags to filter by
apiInstance.findNotasByTags(tags, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| Tags to filter by | 

### Return type

[**[Nota]**](Nota.md)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## getNotaById

> Nota getNotaById(notaId)

Find nota by ID

Returns a single nota

### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new OpenApiNotastore.NotaApi();
let notaId = 789; // Number | ID of nota to return
apiInstance.getNotaById(notaId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notaId** | **Number**| ID of nota to return | 

### Return type

[**Nota**](Nota.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## updateNota

> Nota updateNota(nota)

Update an existing nota



### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let nota = new OpenApiNotastore.Nota(); // Nota | Nota object that needs to be added to the store
apiInstance.updateNota(nota, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nota** | [**Nota**](Nota.md)| Nota object that needs to be added to the store | 

### Return type

[**Nota**](Nota.md)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json


## updateNotaWithForm

> updateNotaWithForm(notaId, opts)

Updates a nota in the store with form data



### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let notaId = 789; // Number | ID of nota that needs to be updated
let opts = {
  'name': "name_example", // String | Updated name of the nota
  'status': "status_example" // String | Updated status of the nota
};
apiInstance.updateNotaWithForm(notaId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notaId** | **Number**| ID of nota that needs to be updated | 
 **name** | **String**| Updated name of the nota | [optional] 
 **status** | **String**| Updated status of the nota | [optional] 

### Return type

null (empty response body)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined


## uploadFile

> ApiResponse uploadFile(notaId, opts)

uploads an image



### Example

```javascript
import OpenApiNotastore from 'open_api_notastore';
let defaultClient = OpenApiNotastore.ApiClient.instance;
// Configure OAuth2 access token for authorization: notastore_auth
let notastore_auth = defaultClient.authentications['notastore_auth'];
notastore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenApiNotastore.NotaApi();
let notaId = 789; // Number | ID of nota to update
let opts = {
  'additionalMetadata': "additionalMetadata_example", // String | Additional data to pass to server
  'file': "/path/to/file" // File | file to upload
};
apiInstance.uploadFile(notaId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notaId** | **Number**| ID of nota to update | 
 **additionalMetadata** | **String**| Additional data to pass to server | [optional] 
 **file** | **File**| file to upload | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[notastore_auth](../README.md#notastore_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

