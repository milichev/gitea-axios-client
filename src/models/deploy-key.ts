/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.14.0&#43;dev-693-g487f2ee41
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * DeployKey a deploy key
 * @export
 * @interface DeployKey
 */
export interface DeployKey {
    /**
     * 
     * @type {Date}
     * @memberof DeployKey
     */
    createdAt?: any;
    /**
     * 
     * @type {string}
     * @memberof DeployKey
     */
    fingerprint?: any;
    /**
     * 
     * @type {number}
     * @memberof DeployKey
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof DeployKey
     */
    key?: any;
    /**
     * 
     * @type {number}
     * @memberof DeployKey
     */
    keyId?: any;
    /**
     * 
     * @type {boolean}
     * @memberof DeployKey
     */
    readOnly?: any;
    /**
     * 
     * @type {Repository}
     * @memberof DeployKey
     */
    repository?: any;
    /**
     * 
     * @type {string}
     * @memberof DeployKey
     */
    title?: any;
    /**
     * 
     * @type {string}
     * @memberof DeployKey
     */
    url?: any;
}