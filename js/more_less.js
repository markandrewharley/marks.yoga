(function() {var moreLink = document.createElement( "a" );var lessLink = document.createElement( "a" );var allChildren = document.getElementsByTagName("section")[0].children;var numberOfChildren = allChildren.length;var insertMore = allChildren[ 2 ];var insertLess = allChildren[ numberOfChildren - 1 ];function toggleCopy( e ) {	var allChildren = document.getElementsByTagName("section")[0].children;	for( var i = 3; i < numberOfChildren; i++ ) {		var child = allChildren[ i ];		if( child.style.display === "none" ) {			child.style.display = "block";		} else {			child.style.display = "none";		}	}	if ( this == moreLink) {		this.remove();	} else if ( this == lessLink) {		insertMore.appendChild( moreLink );	}	if (e !== undefined && e.preventDefault !== undefined ) {		e.preventDefault();	}};moreLink.setAttribute( "href", "#" );moreLink.setAttribute( "class", "more-link" );moreLink.innerHTML = "[more]";moreLink.innerHTML = "more &Gt;";moreLink.innerHTML = "[more]";moreLink.addEventListener( "click", toggleCopy );lessLink.setAttribute( "href", "#" );lessLink.setAttribute( "class", "less-link" );lessLink.innerHTML = "[less]";lessLink.innerHTML = "&Lt; less";lessLink.innerHTML = "[less]";lessLink.addEventListener( "click", toggleCopy );toggleCopy();insertMore.appendChild( moreLink );insertLess.appendChild( lessLink );}());(function() {var moreLink = document.createElement( "a" );var lessLink = document.createElement( "a" );var allChildren = document.getElementsByTagName("section")[1].children;var numberOfChildren = allChildren.length;var insertMore = allChildren[ 1 ];var insertLess = allChildren[ numberOfChildren - 1 ];function toggleCopy( e ) {	var allChildren = document.getElementsByTagName("section")[1].children;	for( var i = 2; i < numberOfChildren; i++ ) {		var child = allChildren[ i ];		if( child.style.display === "none" ) {			child.style.display = "block";		} else {			child.style.display = "none";		}	}	if ( this == moreLink) {		this.remove();	} else if ( this == lessLink) {		insertMore.appendChild( moreLink );	}	if (e !== undefined && e.preventDefault !== undefined ) {		e.preventDefault();	}};moreLink.setAttribute( "href", "#" );moreLink.setAttribute( "class", "more-link" );moreLink.innerHTML = "[more]";moreLink.innerHTML = "more &Gt;";moreLink.innerHTML = "[more]";moreLink.addEventListener( "click", toggleCopy );lessLink.setAttribute( "href", "#" );lessLink.setAttribute( "class", "less-link" );lessLink.innerHTML = "[less]";lessLink.innerHTML = "&Lt; less";lessLink.innerHTML = "[less]";lessLink.addEventListener( "click", toggleCopy );toggleCopy();insertMore.appendChild( moreLink );insertLess.appendChild( lessLink );}());(function() {var moreLink = document.createElement( "a" );var lessLink = document.createElement( "a" );var allChildren = document.getElementsByTagName("section")[2].children;var numberOfChildren = allChildren.length;var insertMore = allChildren[ 1 ];var insertLess = allChildren[ numberOfChildren - 1 ];function toggleCopy( e ) {	var allChildren = document.getElementsByTagName("section")[2].children;	for( var i = 2; i < numberOfChildren; i++ ) {		var child = allChildren[ i ];		if( child.style.display === "none" ) {			child.style.display = "block";		} else {			child.style.display = "none";		}	}	if ( this == moreLink) {		this.remove();	} else if ( this == lessLink) {		insertMore.appendChild( moreLink );	}	if (e !== undefined && e.preventDefault !== undefined ) {		e.preventDefault();	}};moreLink.setAttribute( "href", "#" );moreLink.setAttribute( "class", "more-link" );moreLink.innerHTML = "[more]";moreLink.innerHTML = "more &Gt;";moreLink.innerHTML = "[more]";moreLink.addEventListener( "click", toggleCopy );lessLink.setAttribute( "href", "#" );lessLink.setAttribute( "class", "less-link" );lessLink.innerHTML = "[less]";lessLink.innerHTML = "&Lt; less";lessLink.innerHTML = "[less]";lessLink.addEventListener( "click", toggleCopy );toggleCopy();insertMore.appendChild( moreLink );insertLess.appendChild( lessLink );}());