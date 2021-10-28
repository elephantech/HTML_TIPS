//
// 目次(Table Of Contents)作成
// 文書中の H2 、H3 、H4 タグをスキャンし、目次化する
// (見出しをリンク化)
//

document.addEventListener('DOMContentLoaded', function ()
{
  var contentsList = document.getElementById('toc');  //< 目次を追加する先(table of contents)
  var div = document.createElement('div');            //< 作成する目次のコンテナ要素

  // h2、h3、h4 要素を全て取得する
  var matches = document.querySelectorAll('h2, h3, h4');

  // 取得した見出しタグ要素の数だけ以下の操作を繰り返す
  matches.forEach(function (value, i)
  {
    // 見出しタグ要素のidを取得し空の場合は内容をidにする
    if(value.id === '')
    {
      value.id = value.textContent;
    }

    // 追加する項目を準備する
    // <ul><li><a>ラベル</a></li></ul>
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = value.textContent;
    a.href = location.pathname + '#' + value.id;
    li.appendChild(a)
    ul.appendChild(li);

    // 見出し要素によって振り分け
    // <div id="toc">
    //     <div>
    //         <ul class="lv1">
    //             <li><a>見出しH2</a></li>
    //             <ul class="lv2">
    //                 <li><a>見出しH3</a></li>
    //                 <ul class="lv3">
    //                     <li><a>見出しH4</a></li>
    //                 </ul>
    //             </ul>
    //         </ul>
    //     </div>
    // </div>
    switch( value.tagName )
    {
      case 'H2' :       //< H2
      {
        ul.className = "lv1";
        div.appendChild(ul);
        break;
      }
      case 'H3' :       //< H3
      {
        ul.className = "lv2";
        div.lastElementChild.appendChild(ul);
        break;
      }
      case 'H4' :       //< H4
      {
        ul.className = "lv3";
        div.lastElementChild.lastElementChild.appendChild(ul);
        break;
      }
    }
  });

  // 最後に画面にレンダリング
  contentsList.appendChild(div);
});
