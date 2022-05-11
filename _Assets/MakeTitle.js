//
// タイトル作成
// ファイル名("####.html")からタイトル表示("####")を作成する
//

document.addEventListener('DOMContentLoaded', function ()
{
  var contentsList  = document.getElementById('title');  // 格納先ID
  var loc           = document.createElement('h1');    // 格納先タグ

  // ファイル名取得 ("####.html")
  // パーセントエンコーディング解除
  var fileName = window.location.href.split('/').pop();
  fileName = decodeURI(fileName);
  
  // タイトル取得 ("####")
  var title = fileName.split('.html')[0];
  
  // デコードしきれない特殊文字を変換
  title = title.replaceAll('%23', '#');		//< #
  title = title.replaceAll('%2B', '+');		//< +

  // ドキュメントタイトル設定
  document.title = title;
  loc.innerHTML = title;

  // 画面に反映
  contentsList.appendChild(loc);
});
