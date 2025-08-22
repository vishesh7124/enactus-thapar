import React from 'react';

export type eventType1 = {
    id: string;
    title: string;
    logo?: string;
    info?: string;
    path?: string;
    image: string;
};

export type eventType2 = {
    description: string;
    src: string;
    rounds?: string[];
    numbers: NumbersType;
    colors: ColorsType;
    gallery: string[];
    sdg: string[];
    eventTypeBadge: React.ReactElement;
    InfoBadge: React.ReactElement;
}

type NumbersType = {
    [key: string]: number | undefined;
}

type ColorsType = {
    primary: string;
    secondary: string;
}