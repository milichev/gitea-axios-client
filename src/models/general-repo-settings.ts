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
 * GeneralRepoSettings contains global repository settings exposed by API
 * @export
 * @interface GeneralRepoSettings
 */
export interface GeneralRepoSettings {
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    http_git_disabled?: any;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    lfs_disabled?: any;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    migrations_disabled?: any;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    mirrors_disabled?: any;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    time_tracking_disabled?: any;
}
