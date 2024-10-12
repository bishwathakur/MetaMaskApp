import { ethers } from 'ethers';
import { MetaMaskInpageProvider } from '@metamask/providers';

// Declare a type for the Ethereum provider to avoid using the 'window' object.
interface EthereumProvider {
    request: (options: { method: string; params?: any[] }) => Promise<any>;
}

// Use a conditional check to simulate the Ethereum provider.
const ethereum: EthereumProvider | undefined = (global as any).ethereum;

export const connectMetaMask = async (): Promise<boolean> => {
    if (!ethereum) {
        console.error('MetaMask is not installed.');
        return false;
    }

    try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        return true;
    } catch (error) {
        console.error('Failed to connect MetaMask:', error);
        return false;
    }
};

export const enableSnaps = async (): Promise<void> => {
    if (!ethereum) throw new Error('MetaMask is not installed.');

    try {
        await ethereum.request({
            method: 'wallet_enable',
            params: [{
                wallet_snap: {
                    'npm:@metamask/snap': {}
                }
            }]
        });
        console.log('Snaps enabled');
    } catch (error) {
        console.error('Failed to enable snaps:', error);
    }
};

export const getSnapNotifications = async (): Promise<any> => {
    try {
        const notifications = await ethereum.request({
            method: 'wallet_invokeSnap',
            params: ['npm:@metamask/snap', { method: 'get_notifications' }]
        });
        return notifications;
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
        return null;
    }
};

export const setupRecoveryKey = async (): Promise<void> => {
    try {
        await ethereum.request({
            method: 'wallet_invokeSnap',
            params: ['npm:@metamask/snap', { method: 'setup_recovery_key' }]
        });
        console.log('Recovery key setup complete');
    } catch (error) {
        console.error('Failed to set up recovery key:', error);
    }
};

export const recoverPrivateKey = async (recoveryKey: string): Promise<string | null> => {
    try {
        const privateKey = await ethereum.request({
            method: 'wallet_invokeSnap',
            params: ['npm:@metamask/snap', { method: 'recover_private_key', params: { recoveryKey } }]
        });
        return privateKey;
    } catch (error) {
        console.error('Failed to recover private key:', error);
        return null;
    }
};
