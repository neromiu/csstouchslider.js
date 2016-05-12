# csstouchslider.js

スマートフォンやタブレットのタッチイベントに反応するスライドショーをつくるjQueryプラグインです。
アニメーションはCSS3のtranslateで動作します。

## 使い方

* jquery.csstouchslider.x.x.x.min.js
* jquery.csstouchslider.x.x.x.css

headタグに上記のファイルとjQueryを読み込みます。

    <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./jquery.csstouchslider.1.0.0.css">
    <script src="./jquery.csstouchslider.1.0.0.js"></script>

#### Required HTML structure

スライドショーを実現させたい要素を指定します。

    <div id="touchslider">
    	<div id="slide">
    		<ul>
    			<li>1<!--img OK--></li>
    			<li>2<!--img OK--></li>
    			<li>3<!--img OK--></li>
    			<li>4<!--img OK--></li>
    			<li>5<!--img OK--></li>
    		</ul>
    	</div>
    </div>

#### Initialization

scriptタグで下記のように記述してください。

    <script>
    	$(function(){
    		$('#slide').csstouchslider();
    	});
    </script>

#### options

スワイプ感度とアニメーション時間を設定できます。

<script>
	$(function(){
		$('#slide').csstouchslider({speed:300,sensiv:50});
	});
</script>
