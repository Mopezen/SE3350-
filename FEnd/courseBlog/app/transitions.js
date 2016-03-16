/**
 * Created by Abdelkader on 2016-02-04.
 */
export default function(){
  this.transition(
    this.includingInitialRender(),
    this.fromRoute('home'),
    this.toRoute(['students','user','adminPortal']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.includingInitialRender(),
    this.fromRoute('students'),
    this.toRoute(['user','adminPortal']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.includingInitialRender(),
    this.fromRoute('user'),
    this.toRoute('adminPortal'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.hasClass('letusstart'),
    this.toValue(true),
    this.use('toUp', {duration : 500}),
    this.reverse('toDown', {duration :500})
  );
}
