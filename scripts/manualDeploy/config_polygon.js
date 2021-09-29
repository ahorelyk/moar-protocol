const { tokens } = require('./../../test/utils/testHelpers')

module.exports = {
    'usdt': {
        name: 'mToken USDT',
        symbol: 'mUSDT',
        decimals: '8',
        initialExchangeRate: '200000000000000',
        assetAddress: '0xA583D0D1d05345670D3B71c8993003c785daBE5f',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '39222804184156400',
            jumpMultiplierPerYear: '3272914755156920000',
            kink: '800000000000000000',
        },
        mpc: '10000',
        reserveFactor: tokens('0.1'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.1'),
        rewardDistribution: tokens('0'),
    },
    'usdc': {
        name: 'mToken USDC',
        symbol: 'mUSDC',
        decimals: '8',
        initialExchangeRate: '200000000000000',
        assetAddress: '0x5665B1C6Da2a6D38903F1587c027cc02d6549B6d',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '39222804184156400',
            jumpMultiplierPerYear: '3272914755156920000',
            kink: '800000000000000000',
        },
        mpc: '10000',
        reserveFactor: tokens('0.1'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.85'),
        rewardDistribution: tokens('0'),
    },
    'wbtc': {
        name: 'mToken WBTC',
        symbol: 'mWBTC',
        decimals: '8',
        initialExchangeRate: '20000000000000000',
        assetAddress: '0x19cDab1A0b017dc97f733FC2304Dc7aEC678a5E9',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '262458573636948000',
            jumpMultiplierPerYear: '370843987858870000',
            kink: '800000000000000000',
        },
        mpc: '8500',
        reserveFactor: tokens('0.2'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.75'),
        rewardDistribution: tokens('0'),
    },
    'eth': {
        name: 'mToken WETH',
        symbol: 'mWETH',
        decimals: '8',
        initialExchangeRate: '200000000000000000000000000',
        assetAddress: '0x3813a8Ba69371e6DF3A89b78bf18fC72Dd5B43c5',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '95322621997923200',
            jumpMultiplierPerYear: '222330528872230000',
            kink: '800000000000000000',
        },
        mpc: '8500',
        reserveFactor: tokens('0.2'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.75'),
        rewardDistribution: tokens('0'),
    },
    'unn': {
        name: 'mToken UNN',
        symbol: 'mUNN',
        decimals: '8',
        initialExchangeRate: '200000000000000000000000000',
        assetAddress: '0x3D19c13708b6EBC3bc5Ee700713Bb2f2A3d02f3A',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '182367147429835000',
            jumpMultiplierPerYear: '3675373581049680000',
            kink: '800000000000000000',
        },
        mpc: '2500',
        reserveFactor: tokens('0.35'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.35'),
        rewardDistribution: tokens('0'),
    },
    'moar': {
        name: 'mToken MOAR',
        symbol: 'mMOAR',
        decimals: '8',
        initialExchangeRate: '200000000000000000000000000',
        assetAddress: '0xEa607d2c8B080281D146cbF408D57Eb8CB263580',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '182367147429835000',
            jumpMultiplierPerYear: '3675373581049680000',
            kink: '800000000000000000',
        },
        mpc: '2500',
        reserveFactor: tokens('0.35'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.35'),
        rewardDistribution: tokens('0'),
    },
    'link': {
        name: 'mToken LINK',
        symbol: 'mLINK',
        decimals: '8',
        initialExchangeRate: '200000000000000000000000000',
        assetAddress: '0x086E8e40e703fc411cE3AA8522383Fa5c1fe924b',
        jumpRateModel: {
            baseRatePerYear: '0',
            multiplierPerYear: '139788671296901000',
            jumpMultiplierPerYear: '3492099225838310000',
            kink: '800000000000000000',
        },
        mpc: '8500',
        reserveFactor: tokens('0.35'),
        splitReserveFactor: tokens('0'),
        collateralFactor: tokens('0.7'),
        rewardDistribution: tokens('0'),
    }
}