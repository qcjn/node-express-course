const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.send("Hello, World!")
})

const mockUserData = [ 
				{name: 'Mark'},
				{name: 'Jill'}
			]
			
app.get("/users", (req, res) => {
	res.json({
		success: true,
		message: 'successfully got users, Nice!',
		users: mockUserData
	})
})

app.listen(8000, () => {
	console.log("Server is running...")
})