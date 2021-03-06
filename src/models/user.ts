/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.15.0+dev-49-gaee5ef005
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * User represents a user
 * @export
 * @interface User
 */
export interface User {
    /**
     * URL to the user's avatar
     * @type {string}
     * @memberof User
     */
    avatar_url?: any;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    created?: any;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: any;
    /**
     * the user's full name
     * @type {string}
     * @memberof User
     */
    full_name?: any;
    /**
     * the user's id
     * @type {number}
     * @memberof User
     */
    id?: any;
    /**
     * Is the user an administrator
     * @type {boolean}
     * @memberof User
     */
    is_admin?: any;
    /**
     * User locale
     * @type {string}
     * @memberof User
     */
    language?: any;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    last_login?: any;
    /**
     * the user's username
     * @type {string}
     * @memberof User
     */
    login?: any;
    /**
     * Is user restricted
     * @type {boolean}
     * @memberof User
     */
    restricted?: any;
}
