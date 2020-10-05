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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OffenderDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.OffenderDto();
      });

      it('should create an instance of OffenderDto', function() {
        // TODO: update the code to test OffenderDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.OffenderDto);
      });

      it('should have the property bookingNumber (base name: "bookingNumber")', function() {
        // TODO: update the code to test the property bookingNumber
        expect(instance).to.have.property('bookingNumber');
        // expect(instance.bookingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property crn (base name: "crn")', function() {
        // TODO: update the code to test the property crn
        expect(instance).to.have.property('crn');
        // expect(instance.crn).to.be(expectedValueLiteral);
      });

      it('should have the property croNumber (base name: "croNumber")', function() {
        // TODO: update the code to test the property croNumber
        expect(instance).to.have.property('croNumber');
        // expect(instance.croNumber).to.be(expectedValueLiteral);
      });

      it('should have the property familyName (base name: "familyName")', function() {
        // TODO: update the code to test the property familyName
        expect(instance).to.have.property('familyName');
        // expect(instance.familyName).to.be(expectedValueLiteral);
      });

      it('should have the property forename1 (base name: "forename1")', function() {
        // TODO: update the code to test the property forename1
        expect(instance).to.have.property('forename1');
        // expect(instance.forename1).to.be(expectedValueLiteral);
      });

      it('should have the property forename2 (base name: "forename2")', function() {
        // TODO: update the code to test the property forename2
        expect(instance).to.have.property('forename2');
        // expect(instance.forename2).to.be(expectedValueLiteral);
      });

      it('should have the property forename3 (base name: "forename3")', function() {
        // TODO: update the code to test the property forename3
        expect(instance).to.have.property('forename3');
        // expect(instance.forename3).to.be(expectedValueLiteral);
      });

      it('should have the property legacyCmsProbNumber (base name: "legacyCmsProbNumber")', function() {
        // TODO: update the code to test the property legacyCmsProbNumber
        expect(instance).to.have.property('legacyCmsProbNumber');
        // expect(instance.legacyCmsProbNumber).to.be(expectedValueLiteral);
      });

      it('should have the property limitedAccessOffender (base name: "limitedAccessOffender")', function() {
        // TODO: update the code to test the property limitedAccessOffender
        expect(instance).to.have.property('limitedAccessOffender');
        // expect(instance.limitedAccessOffender).to.be(expectedValueLiteral);
      });

      it('should have the property mergePncNumber (base name: "mergePncNumber")', function() {
        // TODO: update the code to test the property mergePncNumber
        expect(instance).to.have.property('mergePncNumber');
        // expect(instance.mergePncNumber).to.be(expectedValueLiteral);
      });

      it('should have the property mergedOasysOffenderId (base name: "mergedOasysOffenderId")', function() {
        // TODO: update the code to test the property mergedOasysOffenderId
        expect(instance).to.have.property('mergedOasysOffenderId');
        // expect(instance.mergedOasysOffenderId).to.be(expectedValueLiteral);
      });

      it('should have the property nomisId (base name: "nomisId")', function() {
        // TODO: update the code to test the property nomisId
        expect(instance).to.have.property('nomisId');
        // expect(instance.nomisId).to.be(expectedValueLiteral);
      });

      it('should have the property oasysOffenderId (base name: "oasysOffenderId")', function() {
        // TODO: update the code to test the property oasysOffenderId
        expect(instance).to.have.property('oasysOffenderId');
        // expect(instance.oasysOffenderId).to.be(expectedValueLiteral);
      });

      it('should have the property pnc (base name: "pnc")', function() {
        // TODO: update the code to test the property pnc
        expect(instance).to.have.property('pnc');
        // expect(instance.pnc).to.be(expectedValueLiteral);
      });

      it('should have the property riskToOthers (base name: "riskToOthers")', function() {
        // TODO: update the code to test the property riskToOthers
        expect(instance).to.have.property('riskToOthers');
        // expect(instance.riskToOthers).to.be(expectedValueLiteral);
      });

      it('should have the property riskToSelf (base name: "riskToSelf")', function() {
        // TODO: update the code to test the property riskToSelf
        expect(instance).to.have.property('riskToSelf');
        // expect(instance.riskToSelf).to.be(expectedValueLiteral);
      });

    });
  });

}));