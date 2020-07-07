const stringsConfig = {
	screenOne: {
		title: "Screen One"
		, subtitle: "Strings that are used Screen One"
		, labels: {
			loading: {
				title: "loading"
				, placeholder: "loading..."
				, maxLength: 60
				, defaultValue: "loading..."
			}
			, welcomeMessage: {
				title: "Message shown to users the first time they open the app. To insert the user's name add ${user}"
				,defaultValue:"Welcome to your app"
				, placeholder: "enter message here"
				, maxLength: 500
				, required: true
				, inputType: "wysiwyg"
			}, currency: {
				title: "Currency"
				, placeholder: "Currency"
				, defaultValue: "Tax May Apply"
				, inputType: 'select'
				, options: [{
                    label:"&#36; USD, AUD, NZD, CAD, Peso, Real, etc. ",
                    value: '&#36;'
                },
                {
                	label:"&#128; Euro",
                    value: '&#128;'
                },
                {
                    label:"&#165; Yuan and Yen",
                    value: "&#165;"
                },
                {
                    label:"DM Duetsche Mark",
                    value:"DM"
                },
                {
                    label:"&#8355; Franc",
                    value:"&#8355;"
                },
                {
                    label:"&#163; Pound",
                    value:"&#163;"
                },
                {
                    label:"&#8356; Lira",
                    value:"&#8356;"
                },
                {
                    label:"<del>P</del> Rouble",
                    value:'<del>P</del>'
                },
                {
                    label:"SFr Switz Franc",
                    value:"SFr"
                },
                {
                    label:"ZAR Rand",
                    value:"ZAR"
                }]
				, defaultValue: "&#36;"
			},
		}
	}
	, screenTwo: {
		title: "Screen Two"
		//, subtitle: "This is an optional text to clear things up for the user"
		, labels: {
			noMatches: {
				title: "Message to show when no matches found."
				, placeholder: "enter message here"
				, defaultValue: "Sorry no matches found. Please try again latter"
				, maxLength: 600
				, inputType: "wysiwyg"
			}
		}
	}

};
