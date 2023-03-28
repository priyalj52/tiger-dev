#This contract made by Manmeet Marwah on Tiger NFT program

import smartpy as sp

#start of contract

class NFT (sp.Contract):
    def __init__(self):
        self.init(
            customer=sp.map(l={},tkey=sp.TNat,tvalue=sp.TAddress),
            nft_cost=sp.tez(1),
            nft_available=sp.nat(2000),
            max_nft=sp.nat(2000),
            operator=sp.test_account("admin").address,
        )
# Entry Point 
    @sp.entry_point
    def buy_nft(self):
        sp.verify(self.data.nft_available > 0,"No nfts available")
        sp.verify(sp.amount >=self.data.nft_cost,"Invalid amount")
        self.data.customer[sp.len(self.data.customer)+1]=sp.sender
        self.data.nft_available=sp.as_nat(self.data.nft_available - 1)
        extra_balance=sp.amount - self.data.nft_cost
        sp.if extra_balance > sp.mutez(0):
          sp.send(sp.sender,extra_balance)


    @sp.entry_point 
    def default(self):
        sp.failwith("NOT ALLOWED")

@sp.add_test(name = "main")
def test():
    scenario = sp.test_scenario()
    admin=sp.test_account("admin")
    priyal=sp.test_account("priyal")
    rohan=sp.test_account("rohan")
    leena=sp.test_account("leena")
    tarun=sp.test_account("tarun")
    john=sp.test_account("john")

    nft=NFT()
    scenario+=nft

    scenario.h2("buy_nft (valid test)")
    nft.buy_nft().run(amount = sp.tez(1), sender = priyal)
    nft.buy_nft().run(amount = sp.tez(2), sender = rohan)
    nft.buy_nft().run(amount = sp.tez(3), sender = john)
    nft.buy_nft().run(amount = sp.tez(1), sender = leena)
    nft.buy_nft().run(amount = sp.tez(1), sender = tarun)

    scenario.h2("buy_nft (failure test)")
    nft.buy_nft().run(amount = sp.tez(1), sender = rohan, valid = True)
