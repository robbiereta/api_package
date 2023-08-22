/**
 * OpenAPI Notastore
 * This is a sample server Notastore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import Nota from '../model/Nota';

/**
* Nota service.
* @module api/NotaApi
* @version 1.0.0
*/
export default class NotaApi {

    /**
    * Constructs a new NotaApi. 
    * @alias module:api/NotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addNota operation.
     * @callback module:api/NotaApi~addNotaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nota} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new nota to the store
     * 
     * @param {module:model/Nota} nota Nota object that needs to be added to the store
     * @param {module:api/NotaApi~addNotaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nota}
     */
    addNota(nota, callback) {
      let postBody = nota;
      // verify the required parameter 'nota' is set
      if (nota === undefined || nota === null) {
        throw new Error("Missing the required parameter 'nota' when calling addNota");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['notastore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Nota;
      return this.apiClient.callApi(
        '/nota', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNota operation.
     * @callback module:api/NotaApi~deleteNotaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a nota
     * 
     * @param {Number} notaId Nota id to delete
     * @param {Object} opts Optional parameters
     * @param {String} [apiKey] 
     * @param {module:api/NotaApi~deleteNotaCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNota(notaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'notaId' is set
      if (notaId === undefined || notaId === null) {
        throw new Error("Missing the required parameter 'notaId' when calling deleteNota");
      }

      let pathParams = {
        'notaId': notaId
      };
      let queryParams = {
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['notastore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/nota/{notaId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findNotasByStatus operation.
     * @callback module:api/NotaApi~findNotasByStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Nota>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Notas by status
     * Multiple status values can be provided with comma separated strings
     * @param {Array.<module:model/String>} status Status values that need to be considered for filter
     * @param {module:api/NotaApi~findNotasByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Nota>}
     */
    findNotasByStatus(status, callback) {
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling findNotasByStatus");
      }

      let pathParams = {
      };
      let queryParams = {
        'status': this.apiClient.buildCollectionParam(status, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['notastore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Nota];
      return this.apiClient.callApi(
        '/nota/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findNotasByTags operation.
     * @callback module:api/NotaApi~findNotasByTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Nota>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Notas by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Array.<String>} tags Tags to filter by
     * @param {module:api/NotaApi~findNotasByTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Nota>}
     */
    findNotasByTags(tags, callback) {
      let postBody = null;
      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling findNotasByTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'tags': this.apiClient.buildCollectionParam(tags, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['notastore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Nota];
      return this.apiClient.callApi(
        '/nota/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotaById operation.
     * @callback module:api/NotaApi~getNotaByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nota} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find nota by ID
     * Returns a single nota
     * @param {Number} notaId ID of nota to return
     * @param {module:api/NotaApi~getNotaByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nota}
     */
    getNotaById(notaId, callback) {
      let postBody = null;
      // verify the required parameter 'notaId' is set
      if (notaId === undefined || notaId === null) {
        throw new Error("Missing the required parameter 'notaId' when calling getNotaById");
      }

      let pathParams = {
        'notaId': notaId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Nota;
      return this.apiClient.callApi(
        '/nota/{notaId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNota operation.
     * @callback module:api/NotaApi~updateNotaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nota} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing nota
     * 
     * @param {module:model/Nota} nota Nota object that needs to be added to the store
     * @param {module:api/NotaApi~updateNotaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nota}
     */
    updateNota(nota, callback) {
      let postBody = nota;
      // verify the required parameter 'nota' is set
      if (nota === undefined || nota === null) {
        throw new Error("Missing the required parameter 'nota' when calling updateNota");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['notastore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Nota;
      return this.apiClient.callApi(
        '/nota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNotaWithForm operation.
     * @callback module:api/NotaApi~updateNotaWithFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a nota in the store with form data
     * 
     * @param {Number} notaId ID of nota that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} [name] Updated name of the nota
     * @param {String} [status] Updated status of the nota
     * @param {module:api/NotaApi~updateNotaWithFormCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateNotaWithForm(notaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'notaId' is set
      if (notaId === undefined || notaId === null) {
        throw new Error("Missing the required parameter 'notaId' when calling updateNotaWithForm");
      }

      let pathParams = {
        'notaId': notaId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'status': opts['status']
      };

      let authNames = ['notastore_auth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/nota/{notaId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/NotaApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * uploads an image
     * 
     * @param {Number} notaId ID of nota to update
     * @param {Object} opts Optional parameters
     * @param {String} [additionalMetadata] Additional data to pass to server
     * @param {File} [file] file to upload
     * @param {module:api/NotaApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    uploadFile(notaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'notaId' is set
      if (notaId === undefined || notaId === null) {
        throw new Error("Missing the required parameter 'notaId' when calling uploadFile");
      }

      let pathParams = {
        'notaId': notaId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'file': opts['file']
      };

      let authNames = ['notastore_auth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/nota/{notaId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}