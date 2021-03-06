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
 * CreateHookOption options when create a hook
 * @export
 * @interface CreateHookOption
 */
export interface CreateHookOption {
    /**
     * 
     * @type {boolean}
     * @memberof CreateHookOption
     */
    active?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateHookOption
     */
    branch_filter?: any;
    /**
     * 
     * @type {CreateHookOptionConfig}
     * @memberof CreateHookOption
     */
    config: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateHookOption
     */
    events?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateHookOption
     */
    type: CreateHookOptionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHookOptionTypeEnum {
    Dingtalk = 'dingtalk',
    Discord = 'discord',
    Gitea = 'gitea',
    Gogs = 'gogs',
    Msteams = 'msteams',
    Slack = 'slack',
    Telegram = 'telegram',
    Feishu = 'feishu'
}

