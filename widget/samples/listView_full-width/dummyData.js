
let dummyData=[
	{
		title:"Title 1"
		,imageUrl:"https://randomuser.me/api/portraits/men/97.jpg"
		,description:"Blah blah blah"
		,toolbar:[{
			key:"btn-icon"
			,class:"toolbarBadge"
			,text:"X"
		},{
			key:"btn-icon"
			,class:"toolbarShare"
			,text:"Icon"
		}]
		,data:{
			key1:"1"
			,key2:"2"
		}
	}
	,{
		title:"Title 2 really longTitle 2 really longTitle 2 really long"
		,imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
		,description:"Blah blah blah"
		,toolbar:[{
			key:"btn-icon"
			,class:"toolbarBadge"
			,text:"X"
		},{
			key:"btn-icon"
			,class:"toolbarShare"
			,text:"Icon"
		}]
	}
	,{
		title:"Title 1"
		,imageUrl:"https://img.icons8.com/ios/72/worldwide-location.png"
		,description:"Blah blah blah"
	}
	,{
		title:"Title 2 really longTitle 2 really longTitle 2 really long"
		,imageUrl:"https://img.icons8.com/ios/72/worldwide-location.png"
	}
	,{
		title:"Title 2 really longTitle 2 really longTitle 2 really long"
		,imageUrl:"https://img.icons8.com/ios/72/worldwide-location.png"
	}
];

(function() {
	/// another way you can create an item
	let item = new ListViewItem({
		title: "Title 2 really longTitle 2 really longTitle 2 really long"
		, imageUrl: "https://img.icons8.com/ios/72/worldwide-location.png"
	});
	dummyData.push(item);
})();