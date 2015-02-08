function outlineHitbox(body) {
	g1 = game.add.graphics(body.x, body.y)
	g1.beginFill(0xFF0000)
	g1.drawCircle(0, 0, 5);
	game.add.tween(g1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
	
	g2 = game.add.graphics(body.x, body.bottom)
	g2.beginFill(0x00FF00)
	g2.drawCircle(0, 0, 5);
	game.add.tween(g2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
	
	g3 = game.add.graphics(body.right, body.y)
	g3.beginFill(0xFF00FF)
	g3.drawCircle(0, 0, 5);
	game.add.tween(g3).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
	
	g4 = game.add.graphics(body.right, body.bottom)
	g4.beginFill(0xCCCCCC)
	g4.drawCircle(0, 0, 5);
	game.add.tween(g4).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);	
}
