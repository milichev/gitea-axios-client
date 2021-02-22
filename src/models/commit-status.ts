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
 * CommitStatus holds a single status of a single Commit
 * @export
 * @interface CommitStatus
 */
export interface CommitStatus {
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    context?: any;
    /**
     * 
     * @type {Date}
     * @memberof CommitStatus
     */
    createdAt?: any;
    /**
     * 
     * @type {User}
     * @memberof CommitStatus
     */
    creator?: any;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    description?: any;
    /**
     * 
     * @type {number}
     * @memberof CommitStatus
     */
    id?: any;
    /**
     * 
     * @type {CommitStatusState}
     * @memberof CommitStatus
     */
    status?: any;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    targetUrl?: any;
    /**
     * 
     * @type {Date}
     * @memberof CommitStatus
     */
    updatedAt?: any;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    url?: any;
}
