const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "to",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "agentid",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "addOrder",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ad",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "usertype",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "registerUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "agent",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "orderId",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "updateOrder",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAgent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "agent",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct LogiChain.Agency[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "orderId",
				"type": "bytes32"
			}
		],
		"name": "getOrder",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "agent",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "to",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct LogiChain.Order",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOrderId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "agent",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "to",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct LogiChain.Order[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ad",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "usertype",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "registered",
						"type": "bool"
					},
					{
						"internalType": "bytes32[]",
						"name": "orders",
						"type": "bytes32[]"
					},
					{
						"internalType": "address",
						"name": "ad",
						"type": "address"
					}
				],
				"internalType": "struct LogiChain.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ad",
				"type": "address"
			}
		],
		"name": "loginUser",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = abi;