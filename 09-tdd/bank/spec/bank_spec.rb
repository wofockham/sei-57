require_relative '../bank'

describe Bank do
    let (:bank) { Bank.new 'TDD Bank' }
    describe '.new' do
        it 'creates a new bank object' do
            expect(bank).to_not be nil
        end

        it 'assigns the bank a name' do
            expect(bank.name).to eq 'TDD Bank'
        end
    end

    describe '#create_account' do
        it 'creates an account for a particular user' do
            bank.create_account 'Craigsy', 7
            expect(bank.accounts['Craigsy']).to eq 7
        end
    end

    describe '#deposit' do
        it 'deposits money into a particular account' do
            bank.create_account 'Jonesy', 200
            bank.deposit 'Jonesy', 300
            expect(bank.accounts['Jonesy']).to eq 200+300
        end
    end

    describe '#withdraw' do
        it 'withdraws money from a particular account' do
            bank.create_account 'Mad Robby', 1000
            bank.withdraw 'Mad Robby', 800
            expect(bank.accounts['Mad Robby']).to eq 200
        end

        it 'ignores withdrawals that exceed the balance' do
            bank.create_account 'Isabel', 15
            bank.withdraw 'Isabel', 1_000_000
            expect(bank.accounts['Isabel']).to eq 15
        end
    end
end

