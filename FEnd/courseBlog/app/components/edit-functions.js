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
  isManageCommentCode: false,
  isManageSWAC: false,
  isManageSecondarySchool: false,
  isManageHSCM: false,
  isManageHSS: false,
  actions: {

    manageCommentCode: function (){
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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

      this.set('isManageCommentCode',true);
    },

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);

      this.set('isManageProgramAdministration',true);
    },
    manageSWAC: function (){
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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);
      
      this.set('isManageSWAC',true);
    },
    manageSecondarySchool: function (){
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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);
      
      this.set('isManageSecondarySchool',true);
    },
    manageHSCM: function (){
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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);
      
      this.set('isManageHSCM',true);
    },
    manageHSS: function (){
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
      this.set('isManageCommentCode',false);
      this.set('isManageSWAC',false);
      this.set('isManageSecondarySchool',false);
      this.set('isManageHSCM',false);
      this.set('isManageHSS',false);
      
      this.set('isManageHSS',true);
    },
  }
});