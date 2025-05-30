import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native';
import Header from '../../../components/layout/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const YouthProduct = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const horizontalPadding = width > 380 ? 16 : 12;
    const [expandedBankIds, setExpandedBankIds] = useState([]);
    const toggleBank = (id) => {
        setExpandedBankIds(prev => {
            if (prev.includes(id)) {
                // 이미 열려있으면 닫기
                return prev.filter(bankId => bankId !== id);
            } else {
                // 닫혀있으면 열기
                return [...prev, id];
            }
        });
    };
    
    
    // 은행 별 금리
    const banks = [
        {
        id: 'kb',
        name: '국민은행',
        rate: '3.50%',
        benefit: '자동이체 시 우대금리',
        },
        {
        id: 'shinhan',
        name: '신한은행',
        rate: '3.30%',
        benefit: '마이신한포인트 연계 우대',
        },
    ];
  

    return (
        <>
            <Header />
            <View className="flex-1 bg-Fineed-background pt-5 px-5 pb-10">
                <ScrollView
                    contentContainerClassName="justify-center"
                    contentContainerStyle={{
                        paddingHorizontal: horizontalPadding,
                        paddingTop: 16,
                        paddingBottom: 24
                }}>
                    {/* 상품 이름 */}
                    <View className="flex-col justify-center gap-1 mb-5 bg-[#F9F9F9] p-6 rounded-2xl shadow-md">
                        <Text className="text-xs text-[#6D6D6D]">적금 / 정부지원상품</Text>
                        <Text className="text-2xl font-bold text-[#014029]">청년도약계좌</Text>
                        <Text className="text-xs">정부 기여금 지원, 이자소득 비과세, 고정금리 제공</Text>
                    </View>

                    {/* 상품 혜택 */}
                    <View className="flex-col justify-center gap-1 mb-5 bg-[#F9F9F9] p-6 rounded-2xl shadow-md">
                        <Text className="text-m font-bold mb-2">상품 혜택</Text>
                        <View className="flex-row gap-5">
                            <View className="flex-col gap-1 w-14">
                                <Text className="text-sm font-bold">지원금액</Text>
                                <Text className="text-sm font-bold">세제혜택</Text>
                                <Text className="text-sm font-bold">금리</Text>
                            </View>
                            <View className="flex-col gap-1 flex-1">
                                <Text className="text-sm">최대 70만원</Text>
                                <Text className="text-sm">이자소득 비과세</Text>
                                <Text className="text-sm">은행별 상이</Text>
                                <Text className="text-sm">3년 고정, 2년 변동</Text>
                            </View>
                        </View>
                    </View>

                    {/* 가입 대상 */}
                    <View className="flex-col justify-center gap-1 mb-5 bg-[#F9F9F9] p-6 rounded-2xl shadow-md">
                        <Text className="text-m font-bold mb-2">가입 대상</Text>
                        <View className="flex-row gap-5">
                            <View className="flex-col gap-1 w-14">
                                <Text className="text-sm font-bold">나이</Text>
                                <Text className="text-sm font-bold">소득조건</Text>
                                <Text className="text-sm font-bold">가구소득</Text>
                            </View>
                            <View className="flex-col gap-1 flex-1">
                                <Text className="text-sm">만 19세 ~ 34세</Text>
                                <Text className="text-sm">연 7,500만원 이하</Text>
                                <Text className="text-sm">중위소득 180% 이하</Text>
                            </View>
                        </View>
                    </View>

                    {/* 상품 안내 */}
                    <View className="flex-col justify-center gap-1 mb-5 bg-[#F9F9F9] p-6 rounded-2xl shadow-md">
                        <Text className="text-m font-bold mb-2">상품 안내</Text>
                        <View className="flex-row gap-5">
                            <View className="flex-col gap-1 w-14">
                                <Text className="text-sm font-bold">가입기간</Text>
                                <Text className="text-sm font-bold">가입금액</Text>
                                <Text className="text-sm font-bold">계약기간</Text>
                                <Text className="text-sm font-bold">유의사항</Text>
                            </View>
                            <View className="flex-col gap-1 flex-1">
                                <Text className="text-sm">2025-05-22 ~ 2025-06-13</Text>
                                <Text className="text-sm">최대 70만원</Text>
                                <Text className="text-sm">5년</Text>
                                <Text className="text-sm">중도해지 시 기여금 미지급, 자격 요건 충족 필수</Text>
                            </View>
                        </View>
                    </View>

                    {/* 은행별 금리 비교 */}
                    <Text className="text-xl font-bold m-4">은행별 금리 비교</Text>
                    {banks.map((bank) => (
                        <TouchableOpacity
                            key={bank.id}
                            onPress={() => toggleBank(bank.id)}
                            className="flex-col justify-center gap-1 mb-5 bg-[#F9F9F9] p-4 rounded-2xl shadow-md"
                        >
                            <View className="flex-row justify-between items-center">
                                <Text className="text-m font-bold">{bank.name}</Text>
                                <Icon
                                    name={expandedBankIds.includes(bank.id) ? 'chevron-up' : 'chevron-down'}
                                    size={20}
                                    color="#333"
                                />
                            </View>

                            {expandedBankIds.includes(bank.id) && (
                                <View className="mt-3">
                                    <View className="flex-row gap-5">
                                        <View className="flex-col gap-1 w-14">
                                            <Text className="text-sm font-bold">기본 금리</Text>
                                            <Text className="text-sm font-bold">우대 금리</Text>
                                        </View>
                                        <View className="flex-col gap-1 flex-1">
                                            <Text className="text-sm">{bank.rate}</Text>
                                            <Text className="text-sm">{bank.benefit}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View className="flex-row justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddYouthInfo')}
                            className="m-4 px-4 py-2 w-full rounded-full bg-[#014029] shadow-md items-center justify-center">
                            <Text className="text-white text-lg font-bold">가입하러 가기</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </>
    );
};

export default YouthProduct;


