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
 * CreateUserOption create user options
 * @export
 * @interface CreateUserOption
 */
export interface CreateUserOption {
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    email: any;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    full_name?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    login_name?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    must_change_password?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    password: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    send_notify?: any;
    /**
     * 
     * @type {number}
     * @memberof CreateUserOption
     */
    source_id?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    username: any;
}
