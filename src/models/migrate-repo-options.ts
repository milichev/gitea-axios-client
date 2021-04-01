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
 * MigrateRepoOptions options for migrating repository's this is used to interact with api v1
 * @export
 * @interface MigrateRepoOptions
 */
export interface MigrateRepoOptions {
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    auth_password?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    auth_token?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    auth_username?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    clone_addr: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    description?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    issues?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    labels?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    milestones?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    mirror?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    mirror_interval?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    _private?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    pull_requests?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    releases?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    repo_name: any;
    /**
     * Name of User or Organisation who will own Repo after migration
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    repo_owner?: any;
    /**
     * 
     * @type {string}
     * @memberof MigrateRepoOptions
     */
    service?: MigrateRepoOptionsServiceEnum;
    /**
     * deprecated (only for backwards compatibility)
     * @type {number}
     * @memberof MigrateRepoOptions
     */
    uid?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MigrateRepoOptions
     */
    wiki?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum MigrateRepoOptionsServiceEnum {
    Git = 'git',
    Github = 'github',
    Gitea = 'gitea',
    Gitlab = 'gitlab'
}

