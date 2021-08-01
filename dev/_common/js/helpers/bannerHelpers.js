function transformOrigin(id, xy) {
	// TweenLite.set(id, {duration:.6, x:-xy.x/2, y:-xy.y/2, scale:.5})    
	TweenLite.set(id, {transformOrigin:`${xy.x}px ${xy.y}px`, x:-xy.x/2, y:-xy.y/2, scale:.5})
}

export {transformOrigin}