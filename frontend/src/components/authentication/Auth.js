import { useForm } from "react-hook-form";
import { Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";
import useShowToast from "../../hooks/common/useShowToast";
import FormInput from "../common/FormInput";
import CommonButton from "../common/CommonButton";

const Auth = ({ isSignup }) => {
    // const navigate = useNavigate();
    const showToast = useShowToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        const payload = {
            name: data.name.trim(),
            email: data.email.trim(),
            password: data.password.trim(),
        };
    };

    return (
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Card
                minW={"330px"}
                p={4}
                rounded={"xl"}
                boxShadow={"inner"}
                border={"0.1px solid rgba(0, 0, 0, 0.6)"}
                color={"black"}
            >
                <CardHeader py={4} px={0} textAlign="center">
                    <Heading size="lg">{isSignup ? "Sign Up" : "Login"}</Heading>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        id="name"
                        type="text"
                        name="name"
                        label="Name"
                        register={register}
                        errors={errors}
                        rules={{
                            required: "This field is required",
                        }}
                    />
                    <Box pt={4}>
                        <FormInput
                            id="email"
                            type="text"
                            name="email"
                            label="Email"
                            register={register}
                            errors={errors}
                            rules={{}}
                        />
                    </Box>
                    <Box pt={4}>
                        <FormInput
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            register={register}
                            errors={errors}
                            rules={{}}
                        />
                    </Box>
                    <Box py={4} textAlign="center">
                        <CommonButton
                            type="submit"
                            btnText={"Signup"}
                            variant={"solid"}
                            bgColor={"blue"}
                        />
                    </Box>
                </form>
            </Card>
        </Flex>
    );
};

export default Auth;
