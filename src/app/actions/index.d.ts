export = Actions;
export as namespace Actions;
declare namespace Actions {

  interface BasicAction {
    type: string
    [propName: string]: any;
  }


  function hideFlashMessage(): BasicAction;

  function showFlashMessage(text: string): BasicAction;

  function toggleT2AppFromMyList(id: number): BasicAction;
  function formSubmitted(formId: number,fields: any): BasicAction;
  function fieldChange(field: any): BasicAction;
  function checkIsOnline(msg: string): BasicAction;
}