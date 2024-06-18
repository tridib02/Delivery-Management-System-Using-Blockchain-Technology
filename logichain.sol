// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;
//Pritam,pkg@gmail.com,123,0xdD870fA1b7C4700F2BD7f44238821C26f7392148,1,10 agent
//Asit,asit@gmail.com,1234,0x17F6AD8Ef982297579C203069C1DbfFE4348c372,0,20 user

contract LogiChain {
    uint256 ag_idx = 0;
    uint256 od_idx = 0;
    Agency[] agencies;
    Order[] orderst;

    struct User {
        string name;
        string email;
        bool usertype; // 0 = client, 1 = agent
        string password;
        bool registered;
        bytes32[] orders;
        address ad;
    }
    struct Order {
        address client;
        address agent;
        bytes32 id;
        string from;
        string to;
        string status;
        uint256 price;
    }

    struct Agency {
        string email;
        bytes32 id;
        address agent;
        uint256 price;
    }
    mapping(bytes32 => Agency) agencyInfo;
    mapping(address => User) userInfo;
    mapping(bytes32 => Order) orderInfo;
    function getUser(address ad)  public view   returns (User memory) {
        return userInfo[ad];
    }
    function getAgent()  public view   returns (Agency[] memory) {
        return agencies;
    }
    function getOrder(bytes32 orderId)  public view   returns (Order memory) {
        return orderInfo[orderId];
    }
    function getOrderId()  public view   returns (Order[] memory) {
        return orderst;
    }
    function registerUser(
        string memory name,
        string memory email,
        string memory password,
        address ad,
        bool usertype,
        uint256 price
    ) public returns (bool) {
        userInfo[ad].registered = true;
        userInfo[ad].name = name;
        userInfo[ad].email = email;
        userInfo[ad].password = password;
        userInfo[ad].usertype = usertype;
        userInfo[ad].ad = ad;

        if (usertype == true) {
            createAgency(price, ad, email);
        }
        return true;
    }

    function createAgency(uint256 price, address agent, string memory email) private  {
        bytes32 agentId = keccak256(abi.encodePacked(agent));
        agencyInfo[agentId].email = email;
        agencyInfo[agentId].id = agentId;
        agencyInfo[agentId].agent = agent;
        agencyInfo[agentId].price = price;
        uint256 idx = ag_idx;
        ag_idx += 1;
        agencies.push();
        Agency storage d = agencies[idx];
        d.email = agencyInfo[agentId].email;
        d.id = agencyInfo[agentId].id;
        d.price = agencyInfo[agentId].price;
        d.agent = agencyInfo[agentId].agent;
    }

    function loginUser(
        string memory email,
        string memory password,
        address ad
    ) public view returns (string memory) {
        User storage user = userInfo[ad];
        require((user.registered), "User not registered");
        require(keccak256(abi.encodePacked(user.email)) == keccak256(abi.encodePacked(email)),"User email not match");
        require(
            keccak256(abi.encodePacked(user.password)) ==
                keccak256(abi.encodePacked(password)),
            "Password is wrong"
        );
        return "LogIn Sucessufully";
    }

    function addOrder(
        string memory from,
        string memory to,
        address client,
        bytes32 agentid,
        string memory status
    ) public payable {
        uint256 price = agencyInfo[agentid].price;
        require(
            msg.value >= price,
            "Amount sent is less than required amount for the order"
        );
        bytes32 id = keccak256(abi.encodePacked(client, from, to, agentid));
        //string memory se="Initialised";
        orderInfo[id].from = from;
        orderInfo[id].to = to;
        orderInfo[id].id = id;
        orderInfo[id].client = client;
        orderInfo[id].price = price;
        orderInfo[id].status = status;
        orderInfo[id].agent = agencyInfo[agentid].agent;
        userInfo[client].orders.push(id);
        uint256 idx = od_idx;
        od_idx += 1;
        orderst.push();
        Order storage d = orderst[idx];
        d.id = orderInfo[id].id;
        d.from = orderInfo[id].from;
        d.to = orderInfo[id].to;
        d.status = orderInfo[id].status;
        d.client = orderInfo[id].client;
        d.agent = orderInfo[id].agent;
        payable(client).transfer(price);
    }

    function updateOrder(
        address agent,
        bytes32 orderId,
        string memory status
    ) public returns (string memory) {
        require(
            agent == orderInfo[orderId].agent,
            "Only the agent of this order can edit it"
        );
        orderInfo[orderId].status = status;
        return orderInfo[orderId].status;
    }
    
    
}