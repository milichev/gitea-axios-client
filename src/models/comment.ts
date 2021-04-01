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
 * Comment represents a comment on a commit or issue
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    body?: any;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    created_at?: any;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    html_url?: any;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    issue_url?: any;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    original_author?: any;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    original_author_id?: any;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    pull_request_url?: any;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    updated_at?: any;
    /**
     * 
     * @type {User}
     * @memberof Comment
     */
    user?: any;
}
