pragma solidity ^0.6.2;

contract Voting {
    enum VoteStates {Absent, Yes, No}

    struct Proposal {
        address creator;
        string question;
        uint yesCount;
        uint noCount;
        mapping (address => VoteStates) voteStates;
    }

    Proposal[] public proposals;

    event ProposalCreated(uint);
    event VoteCast(uint, address indexed);

    mapping(address => bool) members;

    constructor(address[] memory _members) public {
        for(uint i = 0; i < _members.length; i++) {
            members[_members[i]] = true;
        }
        members[msg.sender] = true;
    }

    function proposalCount() public view returns(uint) {
      return proposals.length;
    }

    function newProposal(string calldata _question) external {
        require(members[msg.sender]);
        emit ProposalCreated(proposals.length);
        proposals.push(Proposal(msg.sender, _question, 0, 0));
    }

    function castVote(uint _proposalId, bool _supports) external {
        require(members[msg.sender]);
        Proposal storage proposal = proposals[_proposalId];

        // clear out previous vote
        if(proposal.voteStates[msg.sender] == VoteStates.Yes) {
            proposal.yesCount--;
        }
        if(proposal.voteStates[msg.sender] == VoteStates.No) {
            proposal.noCount--;
        }

        // add new vote
        if(_supports) {
            proposal.yesCount++;
        }
        else {
            proposal.noCount++;
        }

        // we're tracking whether or not someone has already voted
        // and we're keeping track as well of what they voted
        proposal.voteStates[msg.sender] = _supports ? VoteStates.Yes : VoteStates.No;

        emit VoteCast(_proposalId, msg.sender);
    }
}
