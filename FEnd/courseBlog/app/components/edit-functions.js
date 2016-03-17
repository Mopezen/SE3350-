import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManageFaculty: false,
  isManageAcademicProgramCode: false,
  isManageDepartment: false,
  isManageLogicalExpression: false,
  isManageCourseCode: false,
  isManageDegreeCode: false,
  isManageTermCode: false,
  isManageAdmissionRule: false,
  isManageProgramAdministration: false,

  actions: {
    manageFaculty: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageFaculty',true);
    },
    manageAcademicProgramCode: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);


      this.set('isManageAcademicProgramCode',true);
    },
    manageDepartment: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);


      this.set('isManageDepartment',true);
    },
    manageLogicalExpression: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageLogicalExpression',true);
    },
    manageCourseCode: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageCourseCode',true);
    },
    manageDegreeCode: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageDegreeCode',true);
    },
    manageTermCode: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageTermCode',true);
    },
    manageAdmissionRule: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageAdmissionRule',true);
    },
    manageProgramAdministration: function (){
      /*Reset everything*/
      this.set('isManageFaculty',false);
      this.set('isManageAcademicProgramCode',false);
      this.set('isManageDepartment',false);
      this.set('isManageLogicalExpression',false);
      this.set('isManageCourseCode',false);
      this.set('isManageDegreeCode',false);
      this.set('isManageTermCode',false);
      this.set('isManageAdmissionRule',false);
      this.set('isManageProgramAdministration',false);

      this.set('isManageProgramAdministration',true);
    },
  }
});