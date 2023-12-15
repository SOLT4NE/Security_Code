const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === 'this is a drainoor click') {
        message.reply('no no this is bad dude dont post that');
    }
});

client.on('guildMemberAdd', member => {
    console.log(member);
    const channelId = '1081963563293352037';
    const channel = member.guild.channels.cache.get(channelId);
    
    if (!channel) return;

    const userAvatarUrl = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const welcomeMessage = `Welcome ${member.user.username}!\n${userAvatarUrl}`;

    channel.send(welcomeMessage);
});

// Event listener for guild member updates
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (oldMember.nickname !== newMember.nickname) {
        console.log(`Member ${newMember.user.tag} changed their nickname from '${oldMember.nickname || '[none]'}' to '${newMember.nickname || '[none]'}'`);
    }

    // Detecting changes in the user's Discord username as visible within the server context
    if (oldMember.user.username !== newMember.user.username) {
        console.log(`Member ${newMember.user.tag} changed their username from '${oldMember.user.username}' to '${newMember.user.username}'`);
    }
});



client.login('MTE4NDI1NzI3MzQwMTQ0MjM3NQ.G414l7.Dfg5_ILfaSn9Y62LDsEQexVexWkHOkqjW-76M8');


if ((member.user.username.includes('Pio') || (member.nickname && member.nickname.includes('Pio'))) && member.user.id !== '813073832297758771') {