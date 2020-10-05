/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RefElementDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RefElementDto'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.OvpDto = factory(root.HmppsOffenderAssessmentApi.ApiClient, root.HmppsOffenderAssessmentApi.RefElementDto);
  }
}(this, function(ApiClient, RefElementDto) {
  'use strict';

  /**
   * The OvpDto model module.
   * @module model/OvpDto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OvpDto</code>.
   * @alias module:model/OvpDto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OvpDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OvpDto} obj Optional instance to populate.
   * @return {module:model/OvpDto} The populated <code>OvpDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ovp1Year'))
        obj.ovp1Year = ApiClient.convertToType(data['ovp1Year'], 'Number');
      if (data.hasOwnProperty('ovp2Year'))
        obj.ovp2Year = ApiClient.convertToType(data['ovp2Year'], 'Number');
      if (data.hasOwnProperty('ovpAgeWeightedScore'))
        obj.ovpAgeWeightedScore = ApiClient.convertToType(data['ovpAgeWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpDynamicWeightedScore'))
        obj.ovpDynamicWeightedScore = ApiClient.convertToType(data['ovpDynamicWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpNonViolentWeightedScore'))
        obj.ovpNonViolentWeightedScore = ApiClient.convertToType(data['ovpNonViolentWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpPreviousWeightedScore'))
        obj.ovpPreviousWeightedScore = ApiClient.convertToType(data['ovpPreviousWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpRisk'))
        obj.ovpRisk = RefElementDto.constructFromObject(data['ovpRisk']);
      if (data.hasOwnProperty('ovpSexWeightedScore'))
        obj.ovpSexWeightedScore = ApiClient.convertToType(data['ovpSexWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpStaticWeightedScore'))
        obj.ovpStaticWeightedScore = ApiClient.convertToType(data['ovpStaticWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpTotalWeightedScore'))
        obj.ovpTotalWeightedScore = ApiClient.convertToType(data['ovpTotalWeightedScore'], 'Number');
      if (data.hasOwnProperty('ovpViolentWeightedScore'))
        obj.ovpViolentWeightedScore = ApiClient.convertToType(data['ovpViolentWeightedScore'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} ovp1Year
   */
  exports.prototype.ovp1Year = undefined;

  /**
   * @member {Number} ovp2Year
   */
  exports.prototype.ovp2Year = undefined;

  /**
   * @member {Number} ovpAgeWeightedScore
   */
  exports.prototype.ovpAgeWeightedScore = undefined;

  /**
   * @member {Number} ovpDynamicWeightedScore
   */
  exports.prototype.ovpDynamicWeightedScore = undefined;

  /**
   * @member {Number} ovpNonViolentWeightedScore
   */
  exports.prototype.ovpNonViolentWeightedScore = undefined;

  /**
   * @member {Number} ovpPreviousWeightedScore
   */
  exports.prototype.ovpPreviousWeightedScore = undefined;

  /**
   * @member {module:model/RefElementDto} ovpRisk
   */
  exports.prototype.ovpRisk = undefined;

  /**
   * @member {Number} ovpSexWeightedScore
   */
  exports.prototype.ovpSexWeightedScore = undefined;

  /**
   * @member {Number} ovpStaticWeightedScore
   */
  exports.prototype.ovpStaticWeightedScore = undefined;

  /**
   * @member {Number} ovpTotalWeightedScore
   */
  exports.prototype.ovpTotalWeightedScore = undefined;

  /**
   * @member {Number} ovpViolentWeightedScore
   */
  exports.prototype.ovpViolentWeightedScore = undefined;

  return exports;

}));