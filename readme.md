# Framework para a api do YouTube.
Crie player personalizado para os videos do YouTube

**Alto implementado**

Moment.js [Ver](https://momentjs.com)

Open Iconic [Ver](https://useiconic.com)

------

1. Adicione uma div e uma ID para ela

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Script YouTube Player</title>
	<script type="text/javascript" src="//www.youtube.com/player_api"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div id="localplayer"></div>
</body>
</html>
```

2. Fassa a chamada do player usando a ID definida na div e o ID do video do youtube

```javascript
var player1 = new carregarvideo('localplayer', 's1D9Jo06XCg');
```

