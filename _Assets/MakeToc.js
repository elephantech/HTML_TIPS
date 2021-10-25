//
// 目次(Table Of Contents)作成
// 文書中の H2 、H3 、H4 タグをスキャンし、目次化する
//

document.addEventListener('DOMContentLoaded', function ()
{
  var contentsList = document.getElementById('toc'); // 目次を追加する先(table of contents)
  var div = document.createElement('div');// 作成する目次のコンテナ要素

  // h2、h3、h4 要素を全て取得する
  var matches = document.querySelectorAll('h2, h3, h4');

  // 取得した見出しタグ要素の数だけ以下の操作を繰り返す
  matches.forEach(function (value, i)
  {
    // 見出しタグ要素のidを取得し空の場合は内容をidにする
    var id = value.id;
    if(id === '')
    {
      id = value.textContent;
      value.id = id;
    }

    // 要素が h2 タグの場合
    if( value.tagName === 'H2' )
    {
      var ul = document.createElement('ul');
      var li = document.createElement('li');

      // 追加する<ul><li></li></ul>を準備する
      li.textContent = value.textContent;
      ul.appendChild(li);

      // コンテナ要素である<div>の中に要素を追加する
      div.appendChild(ul);
    }

    // 要素が h3 タグの場合
    if( value.tagName === 'H3' )
    {
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      
      // コンテナ要素である<div>の中から最後の<li>を取得する。
      var lastUl = div.lastElementChild;
      var lastLi = lastUl.lastElementChild;

      // 追加する<ul><li></li></ul>を準備する
      li.textContent = value.textContent;
      ul.appendChild(li);

      // 最後の<Ul>の中に要素を追加する
      lastUl.appendChild(ul);
    }

    // 要素が h4 タグの場合
    if( value.tagName === 'H4' )
    {
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      
      // コンテナ要素である<div>の中から最後の<li>を取得する。
      var lastUl = div.lastElementChild;
      var lastLi = lastUl.lastElementChild;

      // 追加する<ul><li></li></ul>を準備する
      li.textContent = value.textContent;
      ul.appendChild(li);

      // 最後の<li>の中に要素を追加する
      lastLi.appendChild(ul);
    }
  });

  // 最後に画面にレンダリング
  contentsList.appendChild(div);
});
