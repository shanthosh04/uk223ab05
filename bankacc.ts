import { createConnection } from 'mysql';


class BankAccount {
    accountNumber: string;
    balance: number;
    pinCode: string;

    constructor(accountNumber: string, balance: number, pinCode: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pinCode = pinCode;
    }


    updateBalance(newBalance: number) {
        this.balance = newBalance;
    }
}
