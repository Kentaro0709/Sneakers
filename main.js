$(function(){
  $('.toggle_btn').on('click', function(){
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  $('#mask').on('click', function(){
    $('#header').removeClass ('open');
  });
  $('#navi a').on('click', function(){
    $('#header').removeClass('open');
  });
  // スムーススクロール
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクールを行う
    $('body, html').animate({scrollTop:position}, 600, 'swing');
    return false;
  });
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slideToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slideToShow:1
        }
      }
    ]
  });
  // スクロール時の画像フェード表示
  // スクロール時のイベント
  $(window).scroll(function(){
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function(){
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下に来てから200px通過したタイミングで要素を表示
      if(scroll > target - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
